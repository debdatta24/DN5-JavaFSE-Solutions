import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class Client {

    public static void main(String[] args) {

        try {

            Socket socket =
                new Socket(
                    "localhost",
                    5000
                );

            PrintWriter output =
                new PrintWriter(
                    socket.getOutputStream(),
                    true
                );

            BufferedReader input =
                new BufferedReader(
                    new InputStreamReader(
                        socket.getInputStream()
                    )
                );

            output.println(
                "Hello From Client"
            );

            String response =
                input.readLine();

            System.out.println(
                "Server Says: " + response
            );

            socket.close();

        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}