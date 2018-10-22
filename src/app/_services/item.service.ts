import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import *  as AppConfig from '../config';
import {Item} from '../_models';

@Injectable()
export class ItemService {
     private config: any;
    constructor(private http: HttpClient) { 
        this.config = AppConfig.config;
    }
    getAll() {
        return this.http.get<Item[]>(`${this.config.apiUrl}/items`);
    }

    getById(id: number) {
        return this.http.get(`${this.config.apiUrl}/items/` + id);
    }

    register(item: Item) {
        return this.http.post(`${this.config.apiUrl}/items/register`, item);
    }

    update(item: Item) {
        return this.http.put(`${this.config.apiUrl}/items/` + item.code, item);
    }

    delete(id: number) {
        return this.http.delete(`${this.config.apiUrl}/items/` + id);
    }
}