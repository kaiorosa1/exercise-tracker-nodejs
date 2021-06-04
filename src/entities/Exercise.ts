import { v4 as uuidV4 } from "uuid";

class Exercise {

    id?: string;

    duration: string;

    date: Date;

    user_id: string;
    
    category_id: string;

    created_at: Date;

    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Exercise }