(async () => {

    type Gender = 'M' | 'F';

    interface IPerson {
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    interface IUser  {
        email   : string;
        role    : string;
    }

    interface ISettingProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    interface IUserSetting {
        name        : string;
        gender      : Gender;
        birthdate   : Date;
        email   : string;
        role    : string;
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Person {
        name: string;
        gender: Gender;
        birthdate: Date;

        constructor({name, gender, birthdate}: IPerson)
        {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    class User  {
        lastAccess: Date;
        email: string;
        role:  string;

        constructor({email, role}: IUser) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    class Setting {
        workingDirectory : string;
        lastOpenFolder: string;
        constructor({workingDirectory, lastOpenFolder}: ISettingProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }

    }

    class UserSettings {
        person: Person;
        user: User;
        setting: Setting

        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        }: IUserSetting) {
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.setting = new Setting({workingDirectory, lastOpenFolder});
        }
    }

    const newPerson = new Person(
        {name: 'Gustavo', gender: 'M', birthdate: new Date()}
    )

    console.log(newPerson);






    const userSettings: UserSettings = new UserSettings({
        workingDirectory: '',
        lastOpenFolder: '',
        email: '',
        role: '',
        name: '',
        gender: 'M',
        birthdate: new Date(),
    });

})()

















