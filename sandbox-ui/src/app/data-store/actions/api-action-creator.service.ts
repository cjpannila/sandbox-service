import {Injectable} from '@angular/core';
import {IAppState, ApiCategory, ServiceTypeCategory} from "../models/common-models";
import {Store} from "@ngrx/store";
import {SET_API_TYPES, SET_SELECTED_API_TYPE, SET_SERVICE_TYPES, UPDATE_API_REQ_MODELS} from "../reducers/api-reducer";

@Injectable()
export class ApiActionCreatorService {

    constructor(private store: Store<IAppState>) {
    }

    updateApiTypes(apiTypes: ApiCategory[]) {
        this.store.dispatch({
            type: SET_API_TYPES,
            payload: apiTypes
        })
    }

    setSelectedApiType(apiCat: ApiCategory) {
        this.store.dispatch({
            type: SET_SELECTED_API_TYPE,
            payload: apiCat
        });
    }

    setApiServiceTypes(serviceTypes: ServiceTypeCategory[]) {
        this.store.dispatch({
            type: SET_SERVICE_TYPES,
            payload: serviceTypes
        });
    }

    updateApiRequestModels(models:any){
        this.store.dispatch({
            type : UPDATE_API_REQ_MODELS,
            payload : models
        });
    }


}
