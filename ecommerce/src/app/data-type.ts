export interface SignUp{
  name: string,
  password: string,
  email: string
}

export interface Login{
  email: String,
  password: String
}

export interface Product{
  name: string,
  price: number,
  category: string,
  color:string,
  description:string,
  image: string,
  id: number  
}
