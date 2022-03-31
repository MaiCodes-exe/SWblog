const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets:[],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async() => {
        let res = await fetch("https://swapi.dev/api/people");
        let data = await res.json();
			setStore({ people: data.results });
      },
      getPlanets: async () => {
        let res = await fetch("https://swapi.dev/api/planets");
        let data = await res.json();
        setStore({ planets: data.results });
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
