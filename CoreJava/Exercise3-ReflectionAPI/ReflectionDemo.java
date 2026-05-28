import java.lang.reflect.Method;

public class ReflectionDemo {

    public static void main(String[] args) {

        try {

            Class<?> cls =
                Class.forName("TestClass");

            Object obj =
                cls.getDeclaredConstructor()
                   .newInstance();

            Method[] methods =
                cls.getDeclaredMethods();

            for (Method method : methods) {

                System.out.println(
                    "Method Name: " +
                    method.getName()
                );

                method.invoke(obj);
            }

        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}