import AsyncStorage from '@react-native-async-storage/async-storage';

class MyInfo {
  static myInstance = null;

  data = {
    signin_flag: 0,
    id: 0,
    push_id: '',
  };

  static getInstance() {
    if (this.myInstance === null) {
      this.myInstance = new MyInfo();
    }
    return this.myInstance;
  }

  constructor() {
    if (this.myInstance === undefined) {
      this.readData();
    }
  }

  getData() {
    return this.data;
  }

  async readData() {
    try {
      AsyncStorage.getItem('pooluckInfo', (err, value) => {
        if (err == null) {
          if (value != null) this.data = JSON.parse(value);
        }
      });
    } catch (error) {
      // Error saving data
    }
  }

  async saveData(field, value) {
    try {
      if (field === 'signin_flag') this.data.signin_flag = value;
      else if (field === 'id') this.data.id = value;
      else if (field === 'push_id') this.data.push_id = value;

      await AsyncStorage.setItem('pooluckInfo', JSON.stringify(this.data));
    } catch (error) {
      // Error saving data
    }
  }

  async clearData() {
    this.data = {
      signin_flag: 0,
      id: 0,
      push_id: this.data.push_id,
    };
    try {
      await AsyncStorage.setItem('pooluckInfo', JSON.stringify(this.data));
    } catch (error) {
      // Error saving data
    }
  }
}

export const myInfo = MyInfo.getInstance();
