import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import MixerBlock from "../components/MixerBlock";

const HomePage = ({items}) => {
    return (
            <div className="container">
                <div className="content__top">

                    <Categories
                        items={
                            [
                                'Все',
                                'Цветные',
                                'Чёрно-белые',
                                'Большие',
                                'Маленькие',

                            ]
                        }
                    />

                    <SortPopup
                        items={
                            [
                                'цене',
                                'красоте',
                                'алфавиту',

                            ]
                        }
                    />
                </div>
                <h2 className="content__title">Все бетономешалки</h2>
                <div className="content__items">

                    {
                        items.map((obj) => (
                            <MixerBlock
                                {...obj}
                                key={obj.id}


                            />
                        ))
                    }


                </div>
            </div>
    );
};

export default HomePage;
