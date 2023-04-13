const url = 'https://dogsapi.origamid.dev/json/';

export function TOKEN_POST(body) {
    return {
        url: `${url}jwt-auth/v1/token`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function TOKEN_VALIDATE_POST(token) {
    return {
        url: `${url}jwt-auth/v1/token/validate`,
        options: {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    };
}

export function USER_GET(token) {
    return {
        url: `${url}api/user`,
        options: {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    };
}

export function USER_POST(body) {
    return {
        url: `${url}api/user`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function PHOTO_POST(formData, token) {
    return {
        url: `${url}api/photo`,
        options: {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        },
    };
}

export function PHOTOS_GET({ page, total, user }) {
    return {
        url: `${url}api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
            cache: 'no-store',
        },
    };
}

export function PHOTO_GET(id) {
    return {
        url: `${url}api/photo/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store',
        },
    };
}

export function COMMENT_POST(id, body) {
    return {
    url: `${url}api/comment/${id}`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      },
    };
  }