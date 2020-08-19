const BASE_URI = 'http://localhost:8080';

export async function request(method, url, options = {}) {
  let uri = `${options.baseUri || BASE_URI}/${url}`;

  let headers = new Headers({
    ...createContentType(options),
    ...options.headers
  });

  let { body, ...restOptions } = options;

  let config = new Request(uri, {
    ...restOptions,
    method,
    headers,
    body: createBody(body, headers)
  });

  return fetch(config).then((r) => fetchResponse(r, options.parse));
}

function createContentType(options) {
  let header = contentTypeFromOptions(options);

  return header ? { 'Content-Type': header } : {};
}

function contentTypeFromOptions(options) {
  if (options && options.headers && options.headers['Content-Type']) {
    return options.headers['Content-Type'];
  }

  if (options && options.body && options.body instanceof FormData) {
    return 'multipart/form-data';
  }

  return typeof options.body === 'object'
    ? 'application/json'
    : (options.headers && options.headers['Content-Type']) || '';
}

function createBody(body, headers) {
  let contentType = headers.get('content-type');

  if (body && contentType && contentType.includes('json')) {
    return JSON.stringify(body);
  }

  if (body instanceof FormData) {
    return body;
  }

  return undefined;
}

async function fetchResponse(response, parse = undefined) {
  let baseData = {
    statusCode: response.status,
    ok: response.ok,
    response: response.clone()
  };

  if (parse === 'text') {
    return { data: await response.text(), ...baseData };
  }

  if (parse === 'noparse') {
    return { data: response, ...baseData };
  }

  let contentType = response.headers.get('Content-Type');

  if (contentType && contentType.includes('json')) {
    return { data: await response.json(), ...baseData };
  }

  throw new TypeError('Unexpected content-type');
}
