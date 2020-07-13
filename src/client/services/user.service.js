import HttpServices from './http.service';

class UserService extends HttpServices {
    createUser = user => this.http.post('/api/auth/signup', user);

    loginUser = user => this.http.post('/api/auth/signin', user);
}

export default new UserService();
