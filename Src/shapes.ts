import {v4 as uuidv4 } from 'uuid'


// Create 3 classes and export them
export class Circle {
    public id: string
    constructor(public radius: number){
        this.id = uuidv4()
    }

    public calculateArea(): number {
                return parseFloat(((this.radius ** 2) * Math.PI).toFixed(2))
    }
}

export class Square {
    public id: string
    constructor(public length: number){
        this.id = uuidv4()
    }
    
    public calculateArea(): number {
        return this.length ** 2
    }
}

export class Triangle {
    public id: string
    constructor(public height: number) {
        this.id = uuidv4()
    }
    
    public calculateArea(): number {
        return Math.floor((this.height ** 2) / 2)
    }
}

