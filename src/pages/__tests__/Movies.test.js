var render = require("@testing-library/react").render;
var MoviesPage = require("../Movies");
describe("MoviesPage", function() {
    test("should render the component", function() {
        var getByTestId = render(MoviesPage()).getByTestId;
        var mainContent = getByTestId("main-content");
        expect(mainContent).toBeInTheDocument();
    });
});