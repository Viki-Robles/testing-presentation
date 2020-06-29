function ExampleTwo() {
  const family = [
    {
      name: "viki", age: 18, gender: "F", location: {
      city: "Athens",
      country: "Greece"
    }},
    {
      name: "jorge", age: 19, gender: "M", location: {
      city: "Vittoria",
      country: "Spain"
    }},

    {
      name: "Maria", age: 20, gender: "F", location: {
      city: "Vittoria",
      country: "Spain"
    }}
  ];

 return (
    <>
    <h2>Practise Area</h2>
    {
      Object.values(family)
      .filter(({ gender }) => gender === "F")
      .map(({ name, age, gender, location }) => (
        <div className="family" key={name}>
              <p>Name:{name}, Age: ({age})</p>
              <p>Gender:{gender}, City: {location.city}, Country: {location.country}</p>
        </div>
      ))
      
    }
    </>
  );

}