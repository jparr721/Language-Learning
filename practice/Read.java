import java.io.*;
import java.util.*;

/**
This program takes input from a CSV file and sorts it based on characteristics.
  */

public class Read {
	public static void main(String[] args) {
		String csv = "file.csv";
		BufferedReader br = null;
		TreeMap<String, Integer> bookMap = new TreeMap<String, Integer>();
		int totalWords = 0;
		String line = "";
		try {
			br = new BufferedReader(new FileReader(csv));
			while ((line = br.readLine()) != null) {
				String[] book = line.split(", ");
				String title = book[0];
				String numOfPages = book[1];
				String numWords = book[2];;
				int pages = Integer.parseInt(numOfPages);
				int words = Integer.parseInt(numWords);
				totalWords = (words * pages);
				// This should automatically sort.
				bookMap.put(title, pages);	
			}	

		} catch(FileNotFoundException e) {
			e.printStackTrace();
		} catch(IOException e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch(IOException e) {
					e.printStackTrace();
				}
			}
		}
		for (Entry e : bookMap.entrySet()) {
			System.out.println(e.getKey + " " + e.getValue());
		}
	}
}
