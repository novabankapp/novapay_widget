import axios,{AxiosError,
AxiosInstance,
AxiosProgressEvent,
AxiosRequestConfig,
AxiosResponse,
InternalAxiosRequestConfig} from 'axios'


//mock
import MockAdapter from 'axios-mock-adapter';
import Params from './params';
import { BASE_URL } from './constants';


var axiosInstance : AxiosInstance = axios
 
  

  
  const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    
   // if(config.headers != null)
       // config.headers!.Authorization = `Bearer ${tokenManager.getToken()}`;
  
    return config;
  };
  
  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };
  
  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };
  
  const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      // Access Token was expired
      if (
        error.response.status === 401 
      ) {       
  
        try {
          /*const rs = await axios.post(`${BASE_URL}/Token/refresh`, {
            refresh_token: tokenManager.getRefreshToken(),
          });
  
          const { token, refreshToken } = rs.data;
          
          tokenManager.saveTokenObj(token,refreshToken)*/
  
          //return;
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  };
  
  export const setupInterceptorsTo = (
    axiosInstance: AxiosInstance
  ): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  };

  //axiosInstance = setupInterceptorsTo(axiosInstance)


 const mockApi = (axiosInstance : AxiosInstance) => {
  var mock = new MockAdapter(axiosInstance)
  const sleep = (value: number) =>
    new Promise((resolve) => setTimeout(resolve, value));

 
 }




const postConfig : Params = {
  baseUrl: BASE_URL,
  headers: {
              //"Authorization": `Bearer ${tokenManager.getToken()}`,
              //"Content-Type": "multipart/form-data",
          },
  method: 'post'
}
const getConfig : Params = {
  baseUrl: BASE_URL,
  headers: {
          //"Authorization": `Bearer ${tokenManager.getToken()}`
  },
  method: 'get'
}
export type Response = {
statusCode : number,
data : any
}

export const  getAPI = async <IEntity,>(url : string ,extraHeaders: any | null = null, onDownloadProgress : undefined | any  = undefined) : Promise<IEntity> => {
  try { 
    //mockApi(axiosInstance)
    //axiosInstance = setupInterceptorsTo(axiosInstance)
    var headers = extraHeaders != null ? {
      ...postConfig.headers,
      ...extraHeaders
     } : postConfig.headers;
      const {data, status} = await axiosInstance<IEntity>({
        headers: headers,
        method: "get",
        url: `${getConfig.baseUrl}/${url}/`,
        onDownloadProgress: onDownloadProgress
    });
    return data
  }
  catch(error){
  
    console.log('unexpected error: ', error)
    throw error
  
}
}

export  const postAPI = async <IEntity,> (url: string, payload : any, extraHeaders: any | null = null, onUploadProgress : undefined | any = undefined) : Promise<IEntity> => {
try{
   mockApi(axiosInstance)
   axiosInstance = setupInterceptorsTo(axiosInstance)
   var headers = extraHeaders != null ? {
    ...postConfig.headers,
    ...extraHeaders
   } : postConfig.headers;
   const {data, status } = await axiosInstance<IEntity>({        
      url: `${postConfig.baseUrl}/${url}`,
      data: payload,
      method: "post",
      headers : headers,
      onUploadProgress: onUploadProgress
  })
  return data
}
catch(error){

    console.log('unexpected error: ', error)
    throw error
   
}
}
