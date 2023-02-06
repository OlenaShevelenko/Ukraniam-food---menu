import Filter from "./Filter";

const AllCtegories = () => {
    return(
        <div>
            <h2>What would you like to start with today?</h2>
            <div className='box_border'>
                {['First dish', 'Second dish', 'Desserts', 'Cold snacks', 'Drinks', 'All']
                .map(category => <Filter category={category}/>)}
            </div>
           
        </div>
    )
}

export default AllCtegories;