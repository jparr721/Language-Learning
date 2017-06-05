package com.example.jarred.bottomnavpractice;


import android.os.Bundle;
import android.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;


/**
 * A simple {@link Fragment} subclass.
 */
public class FoodMapFragment extends Fragment {
    public static FoodMapFragment newInstance() {
        FoodMapFragment fragment = new FoodMapFragment();
        return fragment;
    }


    public FoodMapFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_food_map, container, false);
    }

}
