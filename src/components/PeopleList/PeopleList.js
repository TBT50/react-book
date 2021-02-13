import Person from "../Person/Person";

const PeopleList = ({ people }) => {
  return (
    <div className="container">
      <ul>
        {people.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
