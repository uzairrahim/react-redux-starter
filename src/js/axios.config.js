import Axios from 'axios';

Axios.interceptors.request.use(function(request){
    return request;
});

Axios.interceptors.response.use(function(response) {
	return response;
});
