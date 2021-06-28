import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";
import { User } from "./User";

@Entity("exercises")
class Exercise {
    @PrimaryColumn()
    id?: string;

    @Column()
    duration: string;
    
    @Column()
    date: Date;

    @ManyToOne(()=>User)
    @JoinColumn({name: "user_id"})
    user: User;
    
    @Column()
    user_id: string;

    @ManyToOne(()=>Category)
    @JoinColumn({name: "category_id"})
    category: Category;
    
    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
            this.updated_at = new Date();
        }
    }
}

export { Exercise }