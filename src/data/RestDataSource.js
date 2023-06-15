import {RestUrls} from "./Urls";
import Axios from "axios";

export class RestDataSource{

    GetData = (dataType, params) => this.SendRequest("get", RestUrls[dataType], params);

    /** axios.request returns a promise to loadData in ActionCreator.js.
     */
    SendRequest = (method, url, params) => Axios.request({method, url, params});
}