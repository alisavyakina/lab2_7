enum Docs {
    PASSPORT = "Паcпорт" ,
    POLIC = "Полис",
    STUDENCHESKY = "Студенческий"
    }
interface IOwner{
    surname: string;
    name: string;
    patronymic: string;
    dataOfBirth: Date;
    document: Docs;
    serieDocument: number;
    numberDocument: number;

    showInfo(): void;
}

class Owner implements IOwner{
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _dataOfBirth: Date;
    private _document: Docs;
    private _serieDocument: number;
    private _numberDocument: number;

    constructor(surname: string, name: string, patronymic: string, dataOfBirth: Date, document: Docs, serieDocumnt: number, numberDocument: number) {
        this._surname = surname;
        this._name = name;
        this._dataOfBirth = dataOfBirth;
        this._document = document;
        this._numberDocument = numberDocument;
        this._patronymic = patronymic;
        this._serieDocument = serieDocumnt;
    }


    get surname(): string {return this._surname;}
    set surname(surname: string) {this._surname = surname;}

    get name(): string {return this._name;}
    set name(name: string) {this._name = name;}

    get patronymic(): string {return this._patronymic;}
    set patronymic(patronymic: string) {this._patronymic = patronymic;}

    get dataOfBirth(): Date {return this._dataOfBirth;}
    set dataOfBirth(dataOfBirth: Date) {this._dataOfBirth = dataOfBirth;}

    get document(): Docs {return this._document;}
    set document(document: Docs) {this._document = document}

    get serieDocument(): number {return this._serieDocument;}
    set serieDocument(serieDocument: number) {this._serieDocument = serieDocument;}

    get numberDocument(): number {return this._numberDocument;}
    set numberDocument(numberDocument: number) {this._numberDocument = numberDocument;}

    showInfo(): void {
        console.log(this._surname, this._name, this._dataOfBirth, this._document, this._numberDocument, this._serieDocument, this._patronymic);
    }
}

interface IVehicle{
    mark: string;
    model: string;
    yearOfRelease: number;
    VIN_number: number;
    registrationNumber: number;
    owner: IOwner;
    showInfo(): void;
}
class Vehicle implements IVehicle{
    private _mark: string;
    private _model: string;
    private _yearOfRelease: number;
    private _VIN_number: number;
    private _registrationNumber: number;
    private _owner: IOwner;

    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner){
        this._mark = mark;
        this._model = model;
        this._yearOfRelease = yearOfRelease;
        this._VIN_number = VIN_number;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    get mark(): string {return this._mark;}
    set mark(mark: string) {this._mark = mark;}

    get model(): string {return this._model;}
    set model(model: string) {this._model = model;}

    get yearOfRelease(): number {return this._yearOfRelease;}
    set yearOfRelease(yearOfRelease: number) {this._yearOfRelease = yearOfRelease;}

    get VIN_number(): number {return this._VIN_number;}
    set VIN_number(VIN_number: number) {this._VIN_number = VIN_number;}

    get registrationNumber(): number {return this._registrationNumber;}
    set registrationNumber(registrationNumber: number) {this._registrationNumber = registrationNumber}

    get owner(): IOwner {return this._owner;}
    set owner(owner: IOwner) {this._owner = owner;}

    showInfo(): void{
        console.log(this._mark, this._model, this._VIN_number, this._owner, this._registrationNumber, this._yearOfRelease);
    }
}

enum CarcaseType {
    UNIVERSAL = "Универсальный",
    KUPE = "Купе",
    SEDAN = "Седан",
    Crossover = "Кроссовер"
};
enum ClassCar {
    A = "Мини-автомобиль",
    B = "Маленький автомобиль",
    C = "среднеразмерный автомобиль",
    D = "полноразмерный автомобиль"
}

interface ICar extends IVehicle{
    carcase: CarcaseType;
    classCar: ClassCar;
}
class Car extends Vehicle implements ICar{

    private _carcase: CarcaseType;
    private _classCar: ClassCar;
    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, carcase: CarcaseType, classCar: ClassCar){
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._carcase = carcase;
        this._classCar = classCar;
    }
    get carcase(): CarcaseType {return this._carcase;}
    set carcase(carcase: CarcaseType) {this._carcase = carcase;}

    get classCar(): ClassCar {return this._classCar;}
    set classCar(classCar: ClassCar) {this._classCar = classCar;}

    showInfo(){
        console.log(this._carcase, this._classCar, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
    }
}

interface IMotorbike{
    frameType: string;
    forSport: boolean;
}
class Motorbike extends Vehicle implements IMotorbike {
    private _frameType: string;
    private _forSport: boolean;
    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, forSport: boolean, frameType: string){
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._forSport = forSport;
        this._frameType = frameType;
    }
    get frameType(): string {return this._frameType;}
    set frameType(frameType: string) {this._frameType = frameType;}

    get forSport(): boolean {return this._forSport;}
    set forSport(forSport: boolean) {this._forSport = forSport;}

    showInfo(){
        console.log(this._frameType, this._forSport, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
    }
}

interface IVehicleStorage<T extends IVehicle>{
    dateCreate: Date;
    data: T[];
    getAll(): T[];
    save(data: T): void;
    sort(): void;
    equalMark(mark: string): void;
}

class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
    private readonly _dateCreate: Date;
    private _data: T[];
    constructor(){
        this._dateCreate = new Date();
        this._data = [];
    }
    sort() {
        for(let j = this._data.length-1; j>0; j--){
            for(let i = 0; i < j; i++){
                if(this._data[i].model < this._data[i+1].model){
                    let temp = this._data[i];
                    this._data[i] = this._data[i+1];
                    this._data[i+1] = temp;
                }
            }
        }
    }
    equalMark(mark: string): T[] {
        let arr = [];
        for(let i = 0; i < this._data.length; i++){
            if(this._data[i].mark.toUpperCase() == mark.toUpperCase()){
                arr.push(this._data[i]);
            }
        }
        return arr;
    }

    get dateCreate(): Date {return this._dateCreate;}

    get data(): T[] {return this._data;}
    
    save(data: T): void {
        this._data.push(data);
    }

    getAll(): T[] {return this._data;}
}


const owner: IOwner = new Owner("Морозова", "Ольга", "Владимировна", new Date(), Docs.PASSPORT, 324444124, 244444);
const car1: ICar = new Car("BMW", "X5", 2015, 4444, 12321, owner, CarcaseType.Crossover, ClassCar.C);
const car2: ICar = new Car("BMW", "X3", 2019, 5555, 56565, owner, CarcaseType.Crossover, ClassCar.C);


const owner1: IOwner = new Owner("Матвеев", "Артур", "Романович", new Date(), Docs.POLIC, 23525, 325765);

const bike1: IMotorbike = new Motorbike("cool", "colcol", 2010, 2525, 2345, owner1, true, "маленький");
const bike2: IMotorbike = new Motorbike("lave", "lamelame", 2015, 1234566, 6789, owner1, false, "большой");

const v1: IVehicle = new Vehicle("Chevrolet", "Camaro", 2010, 242, 21421, owner1);
const v2: IVehicle = new Vehicle("chevrolet", "Captiva", 2003, 2134, 124, owner1);
const v3: IVehicle = new Vehicle("Nissan", "180SX", 2024, 242, 56845, owner);
const v4: IVehicle = new Vehicle("Sckoda", "Octavia", 2000, 1247, 55555, owner1);
const v5: IVehicle = new Vehicle("Ford", "Focus", 2010, 12121, 345678, owner);

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
vehicleStorage.save(v1);
vehicleStorage.save(v2);
vehicleStorage.save(v3);
vehicleStorage.save(v4);
vehicleStorage.save(v5);

if ("Я" < "Z"){
    console.log("1")
}
else{
    console.log("2")    
}
vehicleStorage.sort();
console.log(vehicleStorage.getAll());
console.log("MARKS");
let arr = vehicleStorage.equalMark("Chevrolet");
console.log(arr);