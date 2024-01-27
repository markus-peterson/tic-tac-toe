import axios from 'axios'

class Button {
    constructor() {
        this.state = {
            location: 'http://localhost:3000/ping',
        };
    }

    async ping() {
        const location = this.state.location
        console.log(location)
        try {
            const response = await axios.get(location);
            console.log(response.data.message);
            return response;
        } catch (error) {
            console.error('Error making ping request:', error.message);
            throw error;
        }
    }
}

export default Button;