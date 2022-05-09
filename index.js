class Fooditem
{
    constructor (name)
        {
           this.name = name;
        }
   
        describe()
        {
            return `the name of this item is: ${this.name}`;
        }
}
let item = new Fooditem('firfir');
item.describe();


class Breakfastmenu
{
    constructor ()
    {
        this.breakfast = [];
       
    }

    showBreakfastItems()
    {
        return prompt(`
                        0) exit
                        1) view Item
                        2) create Item
                        3) delete Item
                    `)
    }

    start()
    {
        let selection = this.showBreakfastItems;
        while (selection != 0)
        {
            switch (selection)
            {
                case '1':
                    this.viewItems();
                    break;
                case '2':
                    this.createItem();
                    break;
                case '3':
                    this.deleteItem();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showBreakfastItems;
        }
        alert('guess youre not hungry');
    }

   

   viewItems()
    {
        let foodDescription = '';
        for(i=0; i< this.breakfast.length; i++)
        {
            foodDescription += i + ') ' + this.breakfast[i].name + '\n';
        }
        alert (foodDescription);
    }

   

    createItem()
    {
        let name = prompt ('enter food item you wish to create');
        this.breakfast.push(new Fooditem(name));
    }

    deleteItem()
    {
        let index = prompt('enter index of item you wish to delete from the menu')
        if (index > -1 && index <this.breakfast.length)
        {
            this.breakfast.splice(index, 1);
        }
    }
   
}

let menu = new Breakfastmenu();
menu.start();

