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
