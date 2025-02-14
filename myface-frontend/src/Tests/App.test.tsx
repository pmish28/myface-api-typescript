import react from 'react';
import jest from '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'
import {useFetch} from '../Hooks/useFetch';
import PostList from '../Pages/Postlist';

describe("Testing useFetch component to fetch API data",()=>{
    beforeEach  (()=>{
        global.fetch = jest.fn();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("initial loading",() => {
        render(<PostList />);
        expect(screen.getByText(/Loading/i).toBeInTheDocument());
        
    });

    /*test("useFetch fetches and displays posts data", async() =>
        global.fetch*/
});
                                                                                            

