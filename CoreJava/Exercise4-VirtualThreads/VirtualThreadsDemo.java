public class VirtualThreadsDemo {

    public static void main(String[] args) {

        long start =
            System.currentTimeMillis();

        for (int i = 1; i <= 100000; i++) {

            int number = i;

            Thread.startVirtualThread(() -> {

                System.out.println(
                    "Virtual Thread: " +
                    number
                );
            });
        }

        long end =
            System.currentTimeMillis();

        System.out.println(
            "Execution Time: " +
            (end - start) +
            " ms"
        );
    }
}