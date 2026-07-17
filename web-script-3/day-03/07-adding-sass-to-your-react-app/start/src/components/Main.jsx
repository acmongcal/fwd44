import RemoveAllItems from './RemoveAllItems';
import ItemsList from './ItemsList';
import SelectedItem from './SelectedItem';

const Main = () => (
    <main>
        <section className="your-stuff-to-do-container">
            <h2>Your Stuff to Do</h2>
            <RemoveAllItems />
            <ItemsList />
            <SelectedItem />
        </section>
    </main>
);

export default Main;