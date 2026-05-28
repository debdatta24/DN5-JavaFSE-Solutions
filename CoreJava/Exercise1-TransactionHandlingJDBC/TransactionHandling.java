import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class TransactionHandling {

    public static void main(String[] args) {

        String url =
            "jdbc:mysql://localhost:3306/bankdb";

        String username = "root";

        String password = "root123";

        try {

            Connection con =
                DriverManager.getConnection(
                    url,
                    username,
                    password
                );

            con.setAutoCommit(false);

            String debitQuery =
                "UPDATE accounts " +
                "SET balance = balance - ? " +
                "WHERE account_id = ?";

            String creditQuery =
                "UPDATE accounts " +
                "SET balance = balance + ? " +
                "WHERE account_id = ?";

            PreparedStatement debitStmt =
                con.prepareStatement(debitQuery);

            debitStmt.setInt(1, 500);

            debitStmt.setInt(2, 1);

            debitStmt.executeUpdate();

            PreparedStatement creditStmt =
                con.prepareStatement(creditQuery);

            creditStmt.setInt(1, 500);

            creditStmt.setInt(2, 2);

            creditStmt.executeUpdate();

            con.commit();

            System.out.println(
                "Transaction Successful"
            );

            con.close();

        } catch (Exception e) {

            System.out.println(
                "Transaction Failed"
            );

            e.printStackTrace();
        }
    }
}