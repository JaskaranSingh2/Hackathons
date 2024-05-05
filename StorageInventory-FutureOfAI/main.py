import streamlit as st
def main():
    st.write("Welcome to my Streamlit app!")
    # Add your Streamlit app code here
    st.title("My Super Basic UI App")
    name = st.text_input("Enter your name:")
    st.write("Hello", name)
    age = st.number_input("Enter your age:")
    st.write("You are", age, "years old")
    submit_button = st.button("Submit")
    if submit_button:
        st.write("Form submitted!")

if __name__ == "__main__":
    main()