FILES :=                     \
		.gitignore               \
		.travis.yml              \
		makefile                 \
		apiary.apib              \
		IDB1.log                 \
		model.html               \
		models.py                \
		tests.py                 \
		UML.pdf

check:
	@not_found=0;                                 \
		for i in $(FILES);                            \
		do                                            \
				if [ -e $$i ];                            \
				then                                      \
				    echo "$$i found";                     \
				else                                      \
						echo "$$i NOT FOUND";                 \
						not_found=`expr "$$not_found" + "1"`; \
				fi                                        \
		done;                                         \
		if [ $$not_found -ne 0 ];                     \
		then                                          \
				echo "$$not_found failures";              \
				exit 1;                                   \
		fi;                                           \
		echo "success";

clean:
	rm -f  .coverage
	rm -f  *.pyc
	rm -f  tests.tmp

test: app-tests.tmp

models.html: models.py
	pydoc -w models

IDB1.log:
	git log > IDB1.log

app-tests.tmp: tests.py
	coverage3 run  --branch tests.py >  app-tests.tmp 2>&1
	coverage3 report -m  >> app-tests.tmp
	cat app-tests.tmp