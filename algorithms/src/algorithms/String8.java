package algorithms;

//���� ȸ�� Ȯ��
import java.util.Scanner;

class String8 {
	public String solution(String s) {
		String answer="No";
		s=s.toUpperCase().replaceAll("[^A-Z]", "");
		// �빮�� A-Z �� �ƴϸ� " " ����� 
		String tmp = new StringBuilder(s).reverse().toString();
		if(s.equals(tmp)) answer="Yes";
		
		return answer;
	}

	public static void main(String[] args) {
		String8 T = new String8();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.nextLine(); // ������ �о�ߵȴ�
		System.out.println(T.solution(str));
	}

}
