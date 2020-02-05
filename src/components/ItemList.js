import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Scroll from "./Scroll";
import { NavLink } from "react-router-dom";
import { ItemContainer } from "../styles/styles.js";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../actions/Apicalls";

const ItemList = () => {
  const products = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [items, setItems] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(Fetch());
  }, [dispatch]);

  useEffect(() => {
    var results = products.filter(x => {
      x.item_name.toLowerCase().includes(search.toLowerCase());
    });
    setItems(results);
  }, [search]);

  const handleInput = e => {
    setSearch(e.target.value);
  };
  console.log(`***********`, items);
  return (
    <main>
      <SearchForm />
      <Scroll>
        <ItemContainer>
          {products.map(item => (
            <div class="container">
              <div class="card u-clearfix">
                <div class="card-media">
                  <img src={item.imgs} alt="" class="card-media-img" />
                  <div class="card-media-preview u-flex-center">
                    <svg
                      fill="#ffffff"
                      height="18"
                      viewBox="0 0 24 24"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                  <span class="card-media-tag card-media-tag-orange">
                    {item.condition}
                  </span>
                </div>

                <div class="card-body">
                  <h2 class="card-body-heading">{item.item_name}</h2>
                  <p>{item.location}</p>
                  <div class="card-body-options">
                    <div class="card-body-option card-body-option-favorite">
                      <svg
                        fill="#9C948A"
                        height="26"
                        viewBox="0 0 24 24"
                        width="26"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                      </svg>
                    </div>
                    <div class="card-body-option card-body-option-share">
                      <svg
                        fill="#9C948A"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                      </svg>
                    </div>
                  </div>
                  <ul class="card-body-stars u-clearfix">
                    <li>
                      <svg
                        fill="#D3BCA2"
                        height="28"
                        viewBox="0 0 18 18"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
                        <path d="M0 0h18v18H0z" fill="none" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        fill="#D3BCA2"
                        height="28"
                        viewBox="0 0 18 18"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
                        <path d="M0 0h18v18H0z" fill="none" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        fill="#D3BCA2"
                        height="28"
                        viewBox="0 0 18 18"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
                        <path d="M0 0h18v18H0z" fill="none" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        fill="#D3BCA2"
                        height="28"
                        viewBox="0 0 18 18"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
                        <path d="M0 0h18v18H0z" fill="none" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        fill="#D3BCA2"
                        height="28"
                        viewBox="0 0 18 18"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
                        <path d="M0 0h18v18H0z" fill="none" />
                      </svg>
                    </li>
                  </ul>
                  <a href="#/" class="card-button card-button-cta">
                    {item.daily_rate} $
                  </a>
                  <NavLink to={`/${item.id}`}>
                    <a href="#/" class="card-button card-button-link">
                      More info
                      <span class="card-button-icon">
                        <svg
                          fill="#9C948A"
                          height="16"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </span>
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </ItemContainer>
      </Scroll>
    </main>
  );
};
export default ItemList;
