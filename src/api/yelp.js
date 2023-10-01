import axios from "axios";

export default axios.create({
baseURL:'https://api.yelp.com/v3/businesses',
headers:{
    Authorization :`Bearer pJYqRzDl1j_7hkjdOxJK7DSAnzw7qWxG8PtRGuEhQ-NsBDx0GNYG1xEk8XHTYgzLhU_L2ilijcq2ObGBG8uTRnHaIhwQZV8ajj4Xhf-5Zj2N-0MdKGewpTC8U06wY3Yx`
}
});

