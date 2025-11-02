import { useRegister } from "../Store/Store";

const Rejester = () => {
  const firstName = useRegister((state) => state.firstName);
  const lastName = useRegister((state) => state.lastName);
  const age = useRegister((state) => state.age);

  const setFirstName = useRegister((state) => state.setFirstName);
  const setLastName = useRegister((state) => state.setLastName);
  const setAge = useRegister((state) => state.setAge);

  const getFullName = useRegister((state) => state.getFullName);

  return (
    <section className="h-screen w-full flex flex-col justify-start items-center gap-20 bg-blue-200 py-20 p-20">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-black text-4xl ">Zustand Task</h1>
        <p>add your name</p>
      </div>
      <div className="w-1/2 h-1/2 rounded-2xl bg-white text-black shadow-2xl flex flex-col py-10 justify-start items-center gap-6 ">
        <label htmlFor="">first name</label>
        <input
          type="text"
          value={firstName}
          className="border-2 border-gray-500 rounded-xl"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="">last name</label>
        <input
          type="text"
          value={lastName}
          className="border-2 border-gray-500 rounded-xl"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="">Age</label>
        <input
          type="text"
          value={age}
          className="border-2 border-gray-500 rounded-xl"
          onChange={(e) => setAge(e.target.value)}
        />
        <h1 className="text-3xl">Full Name: {getFullName()}</h1>
      </div>
    </section>
  );
};

export default Rejester;
