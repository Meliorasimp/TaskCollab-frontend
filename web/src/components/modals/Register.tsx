const Register = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div
        className="bg-white rounded-2xl shadow-lg w-4/5 z-50 h-3/4 overflow-y-auto flex"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default Register;
