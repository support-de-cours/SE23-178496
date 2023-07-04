let age: number = 25;

class Test
{
    private _name: string;

    constructor(name: string)
    {
        this._name = name
    }

    get name(): string
    {
        return this._name;
    }
}

const user = new Test(42);
console.log( user.name );
