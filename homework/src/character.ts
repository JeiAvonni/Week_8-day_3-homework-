import { v4 as uuidv4 } from 'uuid';

export abstract class Character{
    private weapon: Weapon[]=[];
    constructor(protected gold$: number, weapon:Weapon[]){
        this.weapon=weapon;
    }
    get gold(){return this.gold$}
    add_weapon(weapon1:Weapon):void{
        this.weapon.push(weapon1);
    }
    remove_weapon(weapon_id:string):void{
        this.weapon=this.weapon.filter(weapon1=>weapon1.id !==weapon_id);
    }
    show_stats(){
        console.log(`weapons:${this.weapon.map(weapon1=>weapon1.name).join(', ')},gold:${this.gold}`)
    }
}

interface Attacking{
    attack(): void
}

interface Defending{
    defends(): void
}


export class Orges extends Character implements Attacking, Defending {
    constructor(gold:number, weapon:Weapon[]){
        super(gold, weapon)
    }

    defends(): void {
        throw new Error("Method not implemented.")
    }


    attack(): void{
        console.log('Orge attacks his/her club')
    }

    defend(): void{
        console.log('Orge defending his/her sheild')
        
    }
    
}


class Peons extends Character implements Attacking, Defending {
    constructor(gold:number, weapon:Weapon[]){
        super(gold, weapon);
    }
    attack(): void {
        throw new Error('Peons attack with clubs.');
    }
    defends(): void {
        throw new Error("Peons defend with sheild.")
    }
        
    }
     
export class Knights extends Character implements Attacking, Defending{
    defends(): void {
        throw new Error("Method not implemenretd")
    }
    collecting_gold(): void{
        console.log('Collecting gold')
    }
    
    attack(): void{
        console.log('Knights attacks with sword')
    }
    
    defend(): void{
        console.log('Knights defends with sheild')
    }
}

export class Archer extends Character implements Attacking, Defending{
    defends(): void {
        throw new Error("Method not implemented.")
    }
    collecting_gold(): void{
        console.log('Collecting gold')
    }
    
    attack(): void{
        console.log('Archer attacks with bow and arrow')
    }
    
    defend(): void{
        console.log('Archer defends with tunic')
    }
}

export class Weapon {
    readonly id: string 
    name: string
    description?: string
    damagePoints: number
    constructor (name:string, damagePoints:number, description?:string){
        this.id = uuidv4()
        this.name = name,
        this.description = description,
        this.damagePoints = damagePoints

    }
}

function attack() {
    throw new Error('Function not implemented.');
}
function defend() {
    throw new Error('Function not implemented.');
}

