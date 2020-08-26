package com.example.noble.popularmovies;

import android.net.Uri;
import android.os.AsyncTask;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import java.net.HttpURLConnection;
import java.util.ArrayList;


/**
 * Created by noble on 2/17/16.
 */

public class MovieClass extends BaseAdapter {

    // Set URL parameters (should these be private methods?)
    public String API_KEY = "API KEY GOES HERE";
    public final String BASE_URL = "http://api.themoviedb.org/3/discover/movie";
    public HttpURLConnection urlConnection = null;

    // TODO Set width and height of all movie image assets once retrieved
    public int width;


    // Request API parameters
    public String mode = "popularity";
    public String sort = "desc"; //
    public int page = 1;

    // Create URL path
    public Uri getURL() {
        String SORT_BY = "sort_by";
        return Uri.parse(BASE_URL).buildUpon()
                .appendQueryParameter(SORT_BY, mode + "." + sort)
                .appendQueryParameter(API_KEY, API_KEY)
                .build();
    }

    // Somehow to check for internet connectivity and then pass information to user if not

    // Checking for network availability
    public boolean isNetworkAvailable()
    {
        return true;
    }

    // TODO if network is available get assets, else display message on UI

    @Override
    public int getCount() {
        return 0;
    }

    @Override
    public Object getItem(int position) {
        return null;
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        return null;
    }

    // I am sure this can be organized better maybe by declaring ArrayList on top?
    // What HTTPGetURL method should I be using?
    public class MovieAssetLoadingTask extends AsyncTask<Void, Void, ArrayList<String>>
    {

        @Override
        protected ArrayList<String> doInBackground(Void... params) {
            while(true){
                try{
                    //TODO research doInBackground boilderplate stuff
                    // Get the path from API Asynchronously
                }
                catch(Exception e)
                {
                    //log & keep trying
                }
            }
            //return null?
        }
    }




}
