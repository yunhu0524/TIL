package algorithms2;

import java.util.ArrayList;
import java.util.Scanner;

class int1 {
	public ArrayList<Integer> solution (int n,int [] arr){
		ArrayList<Integer> answer = new ArrayList<>();
		answer.add(arr[0]);
		for(int i=0; i<n; i++) {
			if(arr[i]>arr[i-1]) {
				answer.add(arr[i]);
			}
		}
		return answer;
	}

	public static void main(String[] args) {
		int1 T = new int1();
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int [] arr = new int [n];
		for(int i=0; i<n; i++) {
			arr[i] = sc.nextInt();
		}
		for(int x : T.solution(n,arr)) {
			System.out.println(x+" ");
		}
				
	}

}
