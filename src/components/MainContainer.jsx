function MainContainer({ children }) {
  return (
    <div className="mx-auto px-6 py-12 min-h-screen max-w-screen-xl md:px-12 md:py-20 lg:py-0 lg:px-24 lg:flex lg:m-auto">
      {children}
    </div>
  );
}

export default MainContainer;
