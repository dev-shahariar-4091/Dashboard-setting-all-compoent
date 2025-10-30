import { Alert, Button, Checkbox, Form, Input } from "antd";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const pass = "12345";
    console.log("Success:", values);
    console.log(values.password);

    if (values.password == pass) {
      navigate("/");
    } else {
      alert("Wrong Credentials!!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <Form
        name="basic"
        //   labelCol={{ span: 8 }}
        //   wrapperCol={{ span: 32 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="mb-5">
          <Title level={4}>Welcome</Title>
          <Text>Please sign in for better experience</Text>
        </div>
        <Title level={5}>Email</Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Enter you email!" }]}
        >
          <Input placeholder="Enter you email!" />
        </Form.Item>

        <Title level={5}>Password</Title>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="flex justify-between gap-10">
          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Link to="/email-verification">Foget Password</Link>
          </Form.Item>
        </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
