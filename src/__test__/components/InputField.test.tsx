import { render } from '@testing-library/react'
import InputField from '../../components/InputField'

describe("InputField Component", () => {
    it("renders input", () => {
        const { getByTestId } = render(<InputField />)
        const inputField = getByTestId('inputField')
        expect(inputField).toBeTruthy()
    })
})