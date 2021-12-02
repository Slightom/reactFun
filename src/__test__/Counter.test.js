import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Counter from "../components/counter/Counter"


let btnInc, btnDec, count;

beforeEach(() => {
    const component = render(<Counter />);
    btnInc = component.getByRole('button', { name: /Increment/ });
    btnDec = screen.getByRole('button', { name: /Dec/ });
    count = component.getByText(/count/)
})

// test('init texts', () => {
//     expect(count).toHaveTextContent('count: 0');
//     expect(btnInc).toHaveTextContent('Increment');
//     expect(btnDec).toHaveTextContent('Decrement');
// })

// it('buttons clicked', () => {
//     userEvent.click(btnInc);
//     expect(count).toHaveTextContent('count: 1');

//     userEvent.click(btnDec)
//     userEvent.click(btnDec)
//     expect(count).toHaveTextContent('count: -1')
// })

it('input test', () => {
    const input = screen.getByPlaceholderText(/aaa/i);
    fireEvent.change(input, { target: { value: '5' } })
    userEvent.click(btnInc);
    userEvent.click(btnInc);
    expect(count).toHaveTextContent('9')// .toBe('5')
})