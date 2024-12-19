import { useState } from 'react'
import './App.css'

type FormData = {
  firstname: string,
  lastname: string,
  age: number,
  favoriteFoods: string[],
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        favoriteFoods: checked
          ? [...prev.favoriteFoods, value]
          : prev.favoriteFoods.filter((food) => food !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  const handleClear = () => {
    setFormData({
      firstname: '',
      lastname: '',
      age: 0,
      favoriteFoods: [],
    });
    setIsSubmitted(false);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" onChange={handleChange} value={formData.firstname} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" onChange={handleChange} value={formData.lastname} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" onChange={handleChange} value={formData.age} />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" onChange={handleChange} checked={formData.favoriteFoods.includes('Chicken')} />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" onChange={handleChange} checked={formData.favoriteFoods.includes('Beef')} />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" onChange={handleChange} checked={formData.favoriteFoods.includes('Vegetables')} />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" onChange={handleChange} checked={formData.favoriteFoods.includes('Dessert')} />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" onChange={handleChange} checked={formData.favoriteFoods.includes('Pork')} />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>

        <button type='submit'>Display User</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>

      <div className="output">
        {/* Display the greeting here */}
        {isSubmitted && (
          <p>
            Hello {formData.firstname} {formData.lastname}. You are {formData.age} years old and your favorite foods are: {formData.favoriteFoods.join(', ')}.
          </p>
        )}
      </div>
    </div>
  )
}

export default App
