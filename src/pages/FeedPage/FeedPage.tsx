import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect, disconnect } from 'src/store/wsSlice';
import styles from './feedpage.module.css';

const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connect('wss://norma.nomoreparties.space/orders/all'));
    return () => {
      dispatch(disconnect());
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-large'>Лента заказов</h2>
      <div className={styles.mainWrapper}>
        <ul className={styles.orderList}>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-64px)', zIndex: 1 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-80px)', zIndex: 0 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__340.jpg'
                      alt=''
                    />
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        +3
                      </span>
                    </div>
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-64px)', zIndex: 1 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-80px)', zIndex: 0 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__340.jpg'
                      alt=''
                    />
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        +3
                      </span>
                    </div>
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-64px)', zIndex: 1 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-80px)', zIndex: 0 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__340.jpg'
                      alt=''
                    />
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        +3
                      </span>
                    </div>
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-64px)', zIndex: 1 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-80px)', zIndex: 0 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__340.jpg'
                      alt=''
                    />
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        +3
                      </span>
                    </div>
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-64px)', zIndex: 1 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-80px)', zIndex: 0 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__340.jpg'
                      alt=''
                    />
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        +3
                      </span>
                    </div>
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-64px)', zIndex: 1 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-80px)', zIndex: 0 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494__340.jpg'
                      alt=''
                    />
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        +3
                      </span>
                    </div>
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className='text text_type_digits-default'>#034535</p>
                <data className='text text_type_main-default text_color_inactive'>
                  Сегодня, 16:20 i-GMT+3
                </data>
              </div>
              <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
              <div className={styles.main}>
                <ul className={styles.ingredientsList}>
                  <li
                    style={{ transform: 'translateX(0)', zIndex: 5 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                      alt=''
                    />
                  </li>
                  <li
                    style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                    className={styles.ingredientsItem}
                  >
                    <img
                      className={styles.ingredientsImg}
                      src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                      alt=''
                    />
                  </li>
                </ul>
                <p className={styles.price}>
                  <span className='text text_type_digits-default'>480</span>
                  <CurrencyIcon type='primary' />
                </p>
              </div>
            </article>
          </li>
        </ul>
        <div className={styles.statistics}>
          <div className={styles.wrapper}>
            <div className={styles.board}>
              <h3 className='text text_type_main-medium'>Готовы:</h3>
              <ul className={styles.boardList}>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
                <li className={`text text_type_digits-default ${styles.orderSuccess}`}>034533</li>
              </ul>
            </div>
            <div className={styles.board}>
              <h3 className='text text_type_main-medium'>В работе:</h3>
              <ul className={styles.boardList}>
                <li className='text text_type_digits-default'>034533</li>
                <li className='text text_type_digits-default'>034533</li>
                <li className='text text_type_digits-default'>034533</li>
                <li className='text text_type_digits-default'>034533</li>
              </ul>
            </div>
          </div>
          <div className={styles.board}>
            <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
            <p className={`text text_type_digits-large ${styles.shadows}`}>28 752</p>
          </div>
          <div className={styles.board}>
            <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
            <p className={`text text_type_digits-large ${styles.shadows}`}>138</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
