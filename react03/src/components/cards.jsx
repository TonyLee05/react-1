
function Cards({username = "hc123"}) {
    // console.log(username);
  return (
    <>

    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
        <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I have seen scale
            on large teams. Its easy to customize, adapts to any design,
            and the build size is tiny.”
        </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
        </div>
        </figcaption>
    </div>
    </figure>
      {/* <img
        src="https://images.app.goo.gl/fBDjeyyuhgZJdVmh9"
        alt="no img"
      /> 
      <h1 className="text-2xl bg-green-500 p-3 rounded-md">
        {" "}
        A card for photos
      </h1>*/}
    </> 
  );
}

export default Cards;
