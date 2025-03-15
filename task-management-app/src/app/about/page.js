export default function AboutPage() {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">About Task Manager</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This task management app is designed to help users stay organized and on top of their daily to-do lists.
          With features such as task creation, editing, completion tracking, and filtering, it provides a seamless experience 
          for managing tasks efficiently.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Developed with **Next.js**, **Framer Motion**, and **Tailwind CSS**, this app aims to offer a
          **simple, user-friendly, and visually appealing task management solution**.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Thank you for using Task Manager! If you have any feedback, feel free to reach out via the contact page.
        </p>
      </div>
    );
  }
  