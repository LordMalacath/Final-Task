const link = 'http://localhost:4000/';
const endpoint = {
  signin: 'signin',
  signup: 'profile/signup',
  profileUpdate: 'profile/update',
  profileAll: 'profile/all',
  profileById: 'profile/',
  profileByEmail: 'profile/',
  companyCreate: 'company/create',
  companyUpdate: 'company/update/',
  companyDelete: 'company/delete/',
  companyAll: 'company/list',
}

//------------------------------------------------
export const authSignin = async (body) => {
  try {
    body = JSON.stringify(body);
    const response = await fetch(`${link + endpoint.signin}`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      },
    })
    return response
  } catch (error) {
    console.log("Api: auth signup", error);
    return error
  }
}

export const authSignup = async (body) => {
  try {
    body = JSON.stringify(body);
    const response = await fetch(`${link + endpoint.signup}`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  } catch (error) {
    console.log("Api: auth signup", error);
    return error
  }
}
//------------------------------------------------
export const profileUpdate = async ({ body, token }) => {
  try {
    body = JSON.stringify(body);
    const response = await fetch(`${link + endpoint.profileUpdate}`, {
      method: 'PUT',
      body,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    return response
  } catch (error) {
    console.log("Api: user update", error);
    return error
  }
}

export const profileAll = async (token) => {
  try {
    const response = fetch(`${link + endpoint.profileAll}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    return response
  } catch (error) {
    console.log("Api: profile all", error);
    return error
  }
}

export const profileById = async ({ id, token }) => {
  try {
    const response = await fetch(`${link + endpoint.profileById + id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    return response
  } catch (error) {
    console.log("Api: profile by id", error);
    return error
  }
}

export const profileByEmail = async ({ token, email }) => {
  try {
    const response = await fetch(`${link + endpoint.profileByEmail + email}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    return response
  } catch (error) {
    console.log("Api: profile by email", error);
    return error
  }
}

//------------------------------------------------
export const companyCreate = async ({ body, token }) => {
  try {
    body = JSON.stringify(body);
    const response = await fetch(`${link + endpoint.companyCreate}`, {
      method: 'POST',
      body,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    return response
  } catch (error) {
    console.log("Api: create company", error);
    return error
  }
}

export const companyUpdate = async ({ id, token, body }) => {
  try {
    body = JSON.stringify(body);
    const response = await fetch(`${link + endpoint.companyUpdate + id}`, {
      method: 'PUT',
      body,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    return response
  } catch (error) {
    console.log("Api: update company", error);
    return error
  }
}

export const companyDelete = async ({ id, token }) => {
  try {
    const response = await fetch(`${link + endpoint.companyDelete + id}`, {
      method: 'DELETE',
      headers: {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    })
    console.log(response)
  } catch (error) {
    console.log("Api: delete company", error);
    return error
  }
}

export const companyAll = async (token) => {
  try {
    const response = fetch(`${link + endpoint.companyAll}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    return response
  } catch (error) {
    console.log("Api: compsny all", error);
    return error
  }
}